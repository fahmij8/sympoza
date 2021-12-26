@section('css')
    <style type="text/css">
        .alert-float {
            position: fixed;
            bottom: 5px;
            right: 10px;
            z-index: 99999;
            margin-left: 10px;
        }

        .alert-float-container {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            max-width: 300px;
        }

    </style>
@endsection

@if ($message = Session::get('success'))
    <div class="alert alert-success alert-float" style="opacity:0" role="alert" x-data x-init="callAlert()">
        <div class="alert-float-container">
            <button type="button" class="close mt-1" data-dismiss="alert">×</button>
            <p class="mr-3 mb-0">{{ $message }}</p>
            <i class="far fa-check-circle mr-2 fa-lg"></i>
        </div>
    </div>
@endif

@if ($message = Session::get('error'))
    <div class="alert alert-danger alert-float" style="opacity:0" role="alert" x-data x-init="callAlert()">
        <div class="alert-float-container">
            <button type="button" class="close mt-1" data-dismiss="alert">×</button>
            <p class="mr-3 mb-0">{{ $message }}</p>
            <i class="fas fa-exclamation-triangle mr-2 fa-lg"></i>
        </div>
    </div>
@endif

@if ($message = Session::get('warning'))
    <div class="alert alert-warning alert-float" style="opacity:0" role="alert" x-data x-init="callAlert()">
        <div class="alert-float-container">
            <button type="button" class="close mt-1" data-dismiss="alert">×</button>
            <p class="mr-3 mb-0">{{ $message }}</p>
            <i class="fas fa-exclamation-triangle mr-2 fa-lg"></i>
        </div>
    </div>
@endif

@if ($message = Session::get('info'))
    <div class="alert alert-info alert-float" style="opacity:0" role="alert" x-data x-init="callAlert()">
        <div class="alert-float-container">
            <button type="button" class="close mt-1" data-dismiss="alert">×</button>
            <p class="mr-3 mb-0">{{ $message }}</p>
            <i class="fas fa-info-circle mr-2 fa-lg"></i>
        </div>
    </div>
@endif

<script>
    var callAlert = () => {
        $('.alert')
            .fadeTo(1, 0)
            .delay(500)
            .fadeTo('slow', 1)
            .delay(5000)
            .fadeOut('slow', function() {
                $('.alert').remove();
            });
    }
</script>
