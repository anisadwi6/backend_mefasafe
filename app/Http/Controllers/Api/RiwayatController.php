<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Claim;
use App\Models\HospitalRegistration;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RiwayatController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $userId = $request->query('user_id');
        if (!$userId) {
            return response()->json(['success' => false, 'message' => 'user_id required'], 400);
        }

        // Pendaftaran RS
        $registrations = HospitalRegistration::where('user_id', $userId)
            ->with('hospital')
            ->latest()
            ->get()
            ->map(fn($r) => [
                'id'           => $r->id,
                'type'         => 'registration',
                'title'        => 'Pendaftaran RS',
                'subtitle'     => $r->hospital_name,
                'detail'       => 'Dr. ' . $r->doctor_name . ' — ' . Carbon::parse($r->schedule_date)->format('d M Y'),
                'queue_number' => $r->queue_number,
                'barcode'      => $r->barcode_data,
                'status'       => $r->status,
                'status_label' => $r->status === 'registered' ? 'Terdaftar' : 'Dibatalkan',
                'date'         => $r->created_at->format('d M Y, H:i'),
                'created_at'   => $r->created_at,
            ]);

        // Transaksi
        $transactions = Transaction::where('user_id', $userId)
            ->latest('transaction_date')
            ->get()
            ->map(fn($t) => [
                'id'           => $t->id,
                'type'         => 'transaction',
                'title'        => $t->transaction_type === 'premi_masuk' ? 'Pembayaran Premi' : 'Pencairan Klaim',
                'subtitle'     => 'Rp ' . number_format($t->amount, 0, ',', '.'),
                'detail'       => Carbon::parse($t->transaction_date)->format('d M Y, H:i'),
                'queue_number' => null,
                'barcode'      => null,
                'status'       => $t->status,
                'status_label' => match($t->status) {
                    'success' => 'Berhasil',
                    'failed'  => 'Gagal',
                    default   => 'Menunggu',
                },
                'date'         => Carbon::parse($t->transaction_date)->format('d M Y, H:i'),
                'created_at'   => $t->transaction_date,
            ]);

        // Klaim
        $claims = Claim::where('user_id', $userId)
            ->latest()
            ->get()
            ->map(fn($c) => [
                'id'           => $c->id,
                'type'         => 'claim',
                'title'        => 'Pengajuan Klaim',
                'subtitle'     => 'Rp ' . number_format($c->claim_amount, 0, ',', '.'),
                'detail'       => $c->description,
                'queue_number' => null,
                'barcode'      => null,
                'status'       => $c->status,
                'status_label' => match($c->status) {
                    'approved' => 'Disetujui',
                    'rejected' => 'Ditolak',
                    'partial'  => 'Sebagian',
                    default    => 'Menunggu',
                },
                'date'         => $c->created_at->format('d M Y, H:i'),
                'created_at'   => $c->created_at,
            ]);

        // Gabung & sort by date terbaru
        $all = $registrations
            ->concat($transactions)
            ->concat($claims)
            ->sortByDesc('created_at')
            ->values();

        return response()->json(['success' => true, 'data' => $all]);
    }
}
