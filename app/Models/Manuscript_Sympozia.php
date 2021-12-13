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
        return $this->hasMany(ManuscriptFile_sympozia::class, 'manuscript_id', 'id');
    }

    public function authors()
    {
        return $this->hasOne(ManuscriptAuthor_sympozia::class, 'manuscript_id', 'id');
    }

    public function status()
    {
        return $this->hasOne(ManuscriptStatus_sympozia::class, 'id', 'status_id');
    }

    public function milestone()
    {
        return $this->hasOne(ManuscriptMilestone_sympozia::class, 'id', 'milestone_id');
    }
}