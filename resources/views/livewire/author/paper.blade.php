<div>
    @if (!auth()->user()->manuscript->isEmpty())
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead class="bg-dark">
                    <tr>
                        <th>Title</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Milestone</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody id="users-table">
                    @foreach (auth()->user()->manuscript as $paper)
                        <tr>
                            <td>
                                {{ $paper->title }}
                            </td>
                            <td class="text-center">
                                @if ($paper->status()->first()->code == 'SUB')
                                    <span class="badge bg-primary">{{ $paper->status()->first()->description }}</span>
                                @elseif ($paper->status()->first()->code == 'REV')
                                    <span class="badge bg-danger">{{ $paper->status()->first()->description }}</span>
                                @elseif ($paper->status()->first()->code == 'ACC')
                                    <span class="badge bg-success">{{ $paper->status()->first()->description }}</span>
                                @endif
                            </td>
                            <td class="text-center">
                                @if ($paper->milestone()->first()->code == 'WRV')
                                    <span
                                        class="badge bg-secondary">{{ $paper->milestone()->first()->description }}</span>
                                @elseif ($paper->milestone()->first()->code == 'IRV')
                                    <span
                                        class="badge bg-warning">{{ $paper->milestone()->first()->description }}</span>
                                @elseif ($paper->milestone()->first()->code == 'CRV')
                                    <span
                                        class="badge bg-success">{{ $paper->milestone()->first()->description }}</span>
                                @endif
                            </td>
                            <td class="text-center">
                                <a href="#" class="btn btn-primary btn-sm">
                                    <i class="fa fa-eye"></i>
                                </a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @endif
</div>
