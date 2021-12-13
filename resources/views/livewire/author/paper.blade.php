<div>
    @section('plugins.Datatables', true)
    @include('livewire.author.paper-delete')
    @livewire('author.paper-edit')
    <h5 class="text-bold">.: Submission List</h5>
    <hr>
    @if (auth()->user()->manuscript->isEmpty())
        <div class="ilustration-no-data"></div>
        <h4 class="text-center mt-3 mb-0">Oh no!</h4>
        <p class="text-center mt-0">No paper data is submitted, lets add one.</p>
    @else
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead class="bg-gray-light">
                    <tr>
                        <th class="text-center" width="3%">#</th>
                        <th width="82%">Title</th>
                        <th class="text-center" width="5%">Status</th>
                        <th class="text-center" width="5%">Milestone</th>
                        <th class="text-center" width="5%">Action</th>
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
                                @if ($paper->status()->first()->code == 'WRV')
                                    <span class="badge bg-navy">{{ $paper->status()->first()->description }}</span>
                                @elseif ($paper->status()->first()->code == 'IRV')
                                    <span class="badge bg-warning">{{ $paper->status()->first()->description }}</span>
                                @elseif ($paper->status()->first()->code == 'CRV')
                                    <span class="badge bg-lime">{{ $paper->status()->first()->description }}</span>
                                @endif
                            </td>
                            <td class="text-center align-middle">
                                @if ($paper->milestone()->first()->code == 'SUB')
                                    <span
                                        class="badge bg-navy">{{ $paper->milestone()->first()->description }}</span>
                                @elseif ($paper->milestone()->first()->code == 'REV')
                                    <span
                                        class="badge bg-maroon">{{ $paper->milestone()->first()->description }}</span>
                                @elseif ($paper->milestone()->first()->code == 'ACC')
                                    <span class="badge bg-lime" data-toggle="tooltip" data-placement="top"
                                        title="Please upload your copyright & final paper files" x-data
                                        x-init="$('[data-toggle]').tooltip()">{{ $paper->milestone()->first()->description }}</span>
                                @endif
                            </td>
                            <td class="text-center align-middle">
                                <div class="btn-group shadow-sm">
                                    <a href="{{ Storage::disk('local')->url($paper->file()->first()->name) }}"
                                        target="_blank" class="btn btn-default">
                                        <i class="far fa-eye fa-xs"></i>
                                    </a>
                                    <button type="button" class="btn btn-default" data-toggle="modal"
                                        data-target="#editSubmission"
                                        wire:click="$emitTo('author.paper-edit','editPaper',{{ $paper->id }})"
                                        {{ $paper->status()->first()->code == 'IRV' ? 'disabled' : '' }}>
                                        <i class="far fa-edit fa-xs text-blue"></i>
                                    </button>
                                    <button type="button" class="btn btn-default" data-toggle="modal"
                                        data-target="#deleteSubmission"
                                        wire:click="$set('id_toDelete','{{ $paper->id }}')"
                                        {{ $paper->status()->first()->code == 'IRV' ? 'disabled' : '' }}>
                                        <i class="fas fa-trash fa-xs text-red"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="align-items-baseline d-flex justify-content-between">
            <div>
                <small>Showing {{ $manuscripts->firstItem() }}-{{ $manuscripts->lastItem() }} from
                    {{ $manuscripts->total() }} submission(s)</small>
            </div>
            {{ $manuscripts->links() }}
        </div>
    @endif
</div>
