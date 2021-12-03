<div>
    @if ($papers->isNotEmpty())
        <div class="table-responsive users-table">
            <table class="table table-striped table-sm data-table">
                <thead class="thead">
                    <tr>
                        <th width="30%">Title</th>
                        <th class="text-center" width="10%">Status</th>
                        <th class="text-center" width="5%">Edit</th>
                        <th class="text-center" width="5%">Authors</th>
                        <th class="text-center" width="5%">Withdraw</th>
                        <th class="text-center" width="5%">Copyright</th>
                        <th class="text-center" width="5%">Review</th>
                        <th class="text-center" width="5%">Final</th>
                    </tr>
                </thead>
                <tbody id="users-table">
                    @foreach ($papers as $paper)
                        <tr>
                            <td>
                                {{ $paper->title }}
                            </td>
                            <td class="text-center">
                                status
                            </td>
                            <td class="text-center">
                                <button class="btn btn-xs">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </td>
                            <td class="text-center">
                                <button class="btn btn-xs">
                                    <i class="fas fa-user-edit"></i>
                                </button>
                            </td>
                            <td class="text-center">
                                <button class="btn btn-xs">
                                    <i class="fas fa-minus-circle" style="color: red"></i>
                                </button>
                            </td>
                            <td class="text-center">
                                <button class="btn btn-xs">
                                    <i class="far fa-copyright"></i>
                                </button>

                            </td>
                            <td class="text-center">
                                <button class="btn btn-xs">
                                    <i class="far fa-file"></i>
                                </button>
                            </td class="text-center">
                            <td class="text-center">
                                <button class="btn btn-xs">
                                    <i class="far fa-file-alt"></i>
                                </button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @endif
</div>
