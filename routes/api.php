<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\ClaimController;
use App\Http\Controllers\Api\DoctorConsultationController;
use App\Http\Controllers\Api\FeedbackController;
use App\Http\Controllers\Api\HospitalRegistrationController;
use App\Http\Controllers\Api\InsurancePolicyController;
use App\Http\Controllers\Api\TransactionController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [\App\Http\Controllers\Api\AuthController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\Api\AuthController::class, 'login']);

Route::prefix('v1')->group(function (): void {
    Route::apiResource('users', UserController::class);
    Route::apiResource('insurance-policies', InsurancePolicyController::class);
    Route::apiResource('claims', ClaimController::class);
    Route::apiResource('transactions', TransactionController::class);
    Route::apiResource('hospital-registrations', HospitalRegistrationController::class);
    Route::apiResource('doctor-consultations', DoctorConsultationController::class);
    Route::apiResource('feedbacks', FeedbackController::class);
    Route::get('/user-insurance', [InsurancePolicyController::class, 'index']);
    Route::get('/claims/status', [ClaimController::class, 'index']);
    Route::get('/transactions/recent', [TransactionController::class, 'index']);
});
