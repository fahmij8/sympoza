<div>
    @section('plugins.Datatables', true)
    @include('livewire.message.message')
    @include('livewire.author.paper-delete')
    <h5 class="text-bold">.: Submission List</h5>
    <hr>
    <div class="table-responsive">
        <table class="table table-bordered table-hover">
            <thead class="bg-gray-light">
                <tr>
                    <th class="text-center">#</th>
                    <th>Title</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Milestone</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($manuscripts as $paper)
                    <tr>
                        <td class="text-center align-middle">
                            {{ $loop->iteration == 1 ? $manuscripts->firstItem() : $loop->iteration + $manuscripts->firstItem() - 1 }}
                        </td>
                        <td class="align-middle">
                            {{ $paper->title }}
                        </td>
                        <td class="text-center align-middle">
                            @if ($paper->status()->first()->code == 'SUB')
                                <span class="badge bg-primary">{{ $paper->status()->first()->description }}</span>
                            @elseif ($paper->status()->first()->code == 'REV')
                                <span class="badge bg-danger">{{ $paper->status()->first()->description }}</span>
                            @elseif ($paper->status()->first()->code == 'ACC')
                                <span class="badge bg-success">{{ $paper->status()->first()->description }}</span>
                            @endif
                        </td>
                        <td class="text-center align-middle">
                            @if ($paper->milestone()->first()->code == 'WRV')
                                <span
                                    class="badge bg-secondary">{{ $paper->milestone()->first()->description }}</span>
                            @elseif ($paper->milestone()->first()->code == 'IRV')
                                <span class="badge bg-warning">{{ $paper->milestone()->first()->description }}</span>
                            @elseif ($paper->milestone()->first()->code == 'CRV')
                                <span class="badge bg-success">{{ $paper->milestone()->first()->description }}</span>
                            @endif
                        </td>
                        <td class="text-center align-middle">
                            <div class="btn-group">
                                <a href="{{ Storage::disk('local')->url($paper->file()->first()->name) }}"
                                    target="_blank" class="btn btn-default">
                                    <i class="far fa-eye fa-xs"></i>
                                </a>
                                <button type="button" class="btn btn-default"
                                    wire:click='editSubmission({{ $paper->id }})'
                                    {{ $paper->milestone()->first()->code == 'IRV' ? 'disabled' : '' }}>
                                    <i class="far fa-edit fa-xs"></i>
                                </button>
                                <button type="button" class="btn btn-default" data-toggle="modal"
                                    data-target="#deleteSubmission"
                                    wire:click="$set('id_toDelete','{{ $paper->id }}')"
                                    {{ $paper->milestone()->first()->code == 'IRV' ? 'disabled' : '' }}>
                                    <i class="fas fa-trash fa-xs"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <div class="float-left">
            {{ $manuscripts->count() }} out of {{ $manuscripts->total() }} submission(s)
        </div>
        <div class="float-right">
            {{ $manuscripts->links() }}
        </div>
    </div>
</div>
