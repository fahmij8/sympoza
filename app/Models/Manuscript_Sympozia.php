<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manuscript_Sympozia extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'sympozia_manuscript';

    public function file()
    {
        return $this->hasOne(ManuscriptFile_sympozia::class, 'manuscript_id', 'id');
    }

    public function authors()
    {
        return $this->hasOne(ManuscriptAuthor_sympozia::class, 'manuscript_id', 'id');
    }
}