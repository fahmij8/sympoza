@section('css')
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
@endsection

<div>
    @section('plugins.Select2', true)
    @section('content')
        <div class="row">
            <div class="col-sm-12 offset-sm-0">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 offset-sm-0">
                <div class="card">
                    <div class="card-header bg-dark">
                        <b>Author</b> | Paper submission
                    </div>
                    <div class="card-body">
                        @if ($routeName == 'author.submission')
                            @livewire('author.submission')
                        @elseif ($routeName == 'author.submission.add')
                            @livewire('author.paper-add')
                        @endif
                    </div>
                    <div class="card-footer text-muted">
                        <i><small class="float-right">Sympozia - ©2021</small></i>
                    </div>
                </div>
            </div>
        </div>
    @endsection
</div>

@push('scripts')
    <script src="{{ mix('js/app.es5.js') }}"></script>
@endpush
