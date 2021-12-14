<?php

namespace App\Http\Livewire\Author;

use App\Models\Manuscript_Sympozia;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

class SubmissionTable extends DataTableComponent
{
    public $refresh = false;
    protected $listeners = ['refreshTable'];

    public function columns(): array
    {
        return [
            Column::make('#')->addClass('bg-gray-light text-center'),
            Column::make('Title', 'title')->sortable()->searchable()->addClass('bg-gray-light'),
            Column::make('Milestone')->addClass('bg-gray-light text-center'),
            Column::make('Status')->addClass('bg-gray-light text-center'),
            Column::make('Action')->addClass('bg-gray-light text-center'),
        ];
    }

    public function filters(): array
    {
        return [
            'milestone' => Filter::make('Milestone')
                ->select([
                    '' => 'Any',
                    '1' => 'Submitted',
                    '2' => 'Accepted',
                    '3' => 'Need Revision',
                    '4' => 'Rejected',
                ]),
            'status' => Filter::make('Status')
                ->select([
                    '' => 'Any',
                    '1' => 'Awaiting Review',
                    '2' => 'Review in Progress',
                    '3' => 'Review Completed',
                ]),
        ];
    }

    public function query(): Builder
    {
        return Manuscript_Sympozia::query()
            ->when($this->getFilter('milestone'), fn($query, $type) => $query->where('milestone_id', $type))
            ->when($this->getFilter('status'), fn($query, $type) => $query->where('status_id', $type));
    }

    public function rowView(): string
    {
        return 'livewire-tables/rows/submission_table';
    }

    public function setTableClass(): ?string
    {
        return "table table-bordered table-hover table-valign-middle";
    }

    public function refreshTable()
    {
        $this->refresh = !$this->refresh;
    }

    public function editPaper($id)
    {
        $this->emit('editPaper', $id);
    }

    public function deletePaper($id)
    {
        $this->emit('deletePaper', $id);
    }
}