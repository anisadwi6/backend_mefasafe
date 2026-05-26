<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\InsurancePolicy;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InsurancePolicyController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'message' => 'Insurance policies retrieved successfully.',
            'data' => InsurancePolicy::orderByDesc('id')->get(),
        ], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'user_id' => ['required', 'exists:users,id'],
            'policy_number' => ['required', 'string', 'max:255', 'unique:insurance_policies,policy_number'],
            'insurance_type' => ['required', 'in:jiwa,kesehatan,kendaraan'],
            'insured_name' => ['required', 'string', 'max:255'],
            'premium_amount' => ['required', 'numeric', 'min:0', 'regex:/^\d+(\.\d{1,2})?$/'],
            'status' => ['sometimes', 'in:active,inactive'],
        ]);

        $insurancePolicy = InsurancePolicy::create([
            'user_id' => $validated['user_id'],
            'policy_number' => $validated['policy_number'],
            'insurance_type' => $validated['insurance_type'],
            'insured_name' => $validated['insured_name'],
            'premium_amount' => $validated['premium_amount'],
            'status' => $validated['status'] ?? 'active',
        ]);

        return response()->json([
            'message' => 'Insurance policy created successfully.',
            'data' => $insurancePolicy,
        ], 201);
    }

    public function show(string $id): JsonResponse
    {
        $insurancePolicy = InsurancePolicy::findOrFail($id);

        return response()->json([
            'message' => 'Insurance policy retrieved successfully.',
            'data' => $insurancePolicy,
        ], 200);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $insurancePolicy = InsurancePolicy::findOrFail($id);

        $validated = $request->validate([
            'user_id' => ['sometimes', 'exists:users,id'],
            'policy_number' => ['sometimes', 'string', 'max:255', 'unique:insurance_policies,policy_number,' . $insurancePolicy->id],
            'insurance_type' => ['sometimes', 'in:jiwa,kesehatan,kendaraan'],
            'insured_name' => ['sometimes', 'string', 'max:255'],
            'premium_amount' => ['sometimes', 'numeric', 'min:0', 'regex:/^\d+(\.\d{1,2})?$/'],
            'status' => ['sometimes', 'in:active,inactive'],
        ]);

        $insurancePolicy->fill($validated)->save();

        return response()->json([
            'message' => 'Insurance policy updated successfully.',
            'data' => $insurancePolicy->fresh(),
        ], 200);
    }

    public function destroy(string $id): JsonResponse
    {
        $insurancePolicy = InsurancePolicy::findOrFail($id);
        $insurancePolicy->delete();

        return response()->json([
            'message' => 'Insurance policy deleted successfully.',
        ], 200);
    }
}
