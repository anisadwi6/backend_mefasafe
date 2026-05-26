<?php

namespace App\Models;

use App\Models\Claim;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class InsurancePolicy extends Model
{
    protected $fillable = [
        'user_id',
        'policy_number',
        'insurance_type',
        'insured_name',
        'premium_amount',
        'status',
    ];

    protected $casts = [
        'premium_amount' => 'decimal:2',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function claims(): HasMany
    {
        return $this->hasMany(Claim::class);
    }
}
