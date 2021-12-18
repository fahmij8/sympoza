@section('css')
    <link rel="stylesheet" href="{{ asset('vendor/country-select/css/countrySelect.min.css') }}">
    <link rel="stylesheet" href="https://unpkg.com/filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css">
    <link rel="stylesheet" href="https://unpkg.com/filepond/dist/filepond.css">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
@endsection

<div>
    @section('content')
        <div class="row">
            <div class="col-sm-12 offset-sm-0">
                <div class="card">
                    <div class="card-header bg-dark">
                        <b>Author</b> | Paper submission
                    </div>
                    <div class="card-body">
                        @livewire('author.submission')
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
    <script src="https://unpkg.com/filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.js"></script>
    <script src="https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js"></script>
    <script src="https://unpkg.com/filepond/dist/filepond.js"></script>
    <script src="{{ asset('vendor/country-select/js/countrySelect.min.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
@endpush