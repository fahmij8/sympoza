<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManuscriptAuthor_Sympozia extends Model
{
    use HasFactory;
    protected $table = 'sympozia_manuscript_author';
    protected $guarded = [];
}