<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class HospitalRegistration extends Model
{
    protected $fillable = [
        'user_id',
        'insurance_policy_id',
        'hospital_name',
        'doctor_name',
        'schedule_date',
        'queue_number',
        'barcode_data',
        'status',
    ];

    protected $casts = [
        'schedule_date' => 'date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
