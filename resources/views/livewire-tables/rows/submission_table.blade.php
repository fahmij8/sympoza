<x-livewire-tables::bs4.table.cell width='3%' class="text-center">
    {{ ($rows->currentpage() - 1) * $rows->perpage() + $loop->index + 1 }}
</x-livewire-tables::bs4.table.cell>

<x-livewire-tables::bs4.table.cell>
    {{ $row->title }}
</x-livewire-tables::bs4.table.cell>

<x-livewire-tables::bs4.table.cell width='5%' class="text-center">
    @php
        $milestones = $row->milestone()->first()->code;
    @endphp
    <small
        class="badge {{ $milestones == 'SUB' ? 'bg-navy' : ($milestones == 'REV' ? 'bg-warning' : ($milestones == 'ACC' ? 'bg-lime' : 'bg-maroon')) }}">{{ $row->milestone()->first()->description }}</small>
</x-livewire-tables::bs4.table.cell>

<x-livewire-tables::bs4.table.cell width='5%' class="text-center">
    @php
        $statuses = $row->status()->first()->code;
    @endphp
    <small
        class="badge {{ $statuses == 'WRV' ? 'bg-navy' : ($statuses == 'IRV' ? 'bg-warning' : 'bg-lime') }}">{{ $row->status()->first()->description }}
        </sma>
</x-livewire-tables::bs4.table.cell>

<x-livewire-tables::bs4.table.cell width='5%' class="text-center">
    <div class="btn-group shadow-sm">
        <a href="{{ Storage::disk('local')->url(
            $row->file()->where('file_type', 1)->first()->name ?? 404,
        ) }}"
            target="_blank" class="btn btn-default">
            <i class="far fa-eye fa-xs"></i>
        </a>
        <button class="btn btn-default" wire:click='$emit("show-edit", {{ $row->id }})'
            {{ $statuses == 'IRV' || $milestones == 'REJ' ? 'disabled' : '' }}>
            <i class="far fa-edit fa-xs text-blue"></i>
        </button>
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteSubmission"
            wire:click="deletePaper({{ $row->id }})" {{ $statuses == 'IRV' ? 'disabled' : '' }}>
            <i class="fas fa-trash fa-xs text-red"></i>
        </button>
    </div>
</x-livewire-tables::bs4.table.cell>