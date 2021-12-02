<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conferences_Sympozia extends Model
{
    use HasFactory;
    protected $table = 'sympozia_conferences';
    protected $guarded = [];
}