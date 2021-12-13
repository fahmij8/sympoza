<div>
    <div class="row">
        <div class="col-sm-12 offset-sm-0">
            <b>
                Abstract List
            </b>
        </div>
    </div>
    <br>

    <div class="row">
        <div class="col-sm-12 offset-sm-0">
            <div class="table-responsive users-table">
                <table class="table table-striped table-sm data-table">
                    <thead class="thead">
                        <tr>
                            <th width="50%">Title</th>
                            <th width="50%">Authors</th>
                        </tr>
                    </thead>
                    <tbody id="users-table">
                        @foreach ($abstracts as $abstract)
                        <tr>
                            <td>
                                {{$abstract->title}}
                            </td>
                            
                            <td>
                                @if ($abstract->author != null)
                                    @foreach ($abstract->author as $author)
                                        {{$author}}
                                    @endforeach
                                @endif
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    

</div>