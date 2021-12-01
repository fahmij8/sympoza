<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManuscriptFile_Sympozia extends Model
{
    protected $fillable = ['manuscript_id', 'file_type', 'name'];
    protected $table = 'sympozia_manuscript_file';
    use HasFactory;
}
