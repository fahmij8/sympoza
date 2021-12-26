<?php

namespace App\Models;

use App\Models\Conferences_Sympozia;
use App\Models\ManuscriptAuthor_Sympozia;
use App\Models\ManuscriptFile_Sympozia;
use App\Models\ManuscriptMilestone_Sympozia;
use App\Models\ManuscriptStatus_Sympozia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manuscript_Sympozia extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'sympozia_manuscript';

    public function file()
    {
        return $this->hasMany(ManuscriptFile_Sympozia::class, 'manuscript_id', 'id');
    }

    public function authors()
    {
        return $this->hasOne(ManuscriptAuthor_Sympozia::class, 'manuscript_id', 'id');
    }

    public function status()
    {
        return $this->hasOne(ManuscriptStatus_Sympozia::class, 'id', 'status_id');
    }

    public function milestone()
    {
        return $this->hasOne(ManuscriptMilestone_Sympozia::class, 'id', 'milestone_id');
    }

    public function conferences()
    {
        return $this->hasOne(Conferences_Sympozia::class, 'id', 'conferences_id');
    }
}