<div>
    <br>
    @if($papers->isNotEmpty())
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
                    @foreach($papers as $paper)
                        <tr>
                            <td>
                                {{$paper->title}}
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
                                <button wire:click="deleteManuscript({{$paper->id}})"class="btn btn-xs">
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
                                    

                                    @if ($paper->file != null)
                                        @foreach($paper->file as $manuscript)
                                            
                                            @if($manuscript->file_type == \App\Models\Filetype_sympozia::where('code', 'REV')->first()->id) 
                                            <a href="{{url('/')}}{{ Storage::disk('local')->url($manuscript->name)}}" target="blank"><i class="far fa-file"></i></a>
                                            @endif
                                        @endforeach
                                    @else
                                        <i class="far fa-file"></i>
                                    @endif
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
    @else
        There is no submission record, please select <b>Add Paper</b> to create one.
    @endif
</div>
