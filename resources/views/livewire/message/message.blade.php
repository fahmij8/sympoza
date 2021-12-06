@if ($message = Session::get('success'))
    <div class="alert alert-success alert-float" role="alert" x-data x-init="callAlert()">
        <div class="alert-float-container">
            <button type="button" class="close mt-1" data-dismiss="alert">×</button>
            <p class="mr-3 mb-0">{{ $message }}</p>
            <i class="far fa-check-circle mr-2 fa-lg"></i>
        </div>
    </div>
@endif

@if ($message = Session::get('error'))
    <div class="alert alert-danger alert-float" role="alert" x-data x-init="callAlert()">
        <div class="alert-float-container">
            <button type="button" class="close mt-1" data-dismiss="alert">×</button>
            <p class="mr-3 mb-0">{{ $message }}</p>
            <i class="fas fa-exclamation-triangle mr-2 fa-lg"></i>
        </div>
    </div>
@endif

@if ($message = Session::get('warning'))
    <div class="alert alert-warning alert-float" role="alert" x-data x-init="callAlert()">
        <div class="alert-float-container">
            <button type="button" class="close mt-1" data-dismiss="alert">×</button>
            <p class="mr-3 mb-0">{{ $message }}</p>
            <i class="fas fa-exclamation-triangle mr-2 fa-lg"></i>
        </div>
    </div>
@endif

@if ($message = Session::get('info'))
    <div class="alert alert-info alert-float" role="alert" x-data x-init="callAlert()">
        <div class="alert-float-container">
            <button type="button" class="close mt-1" data-dismiss="alert">×</button>
            <p class="mr-3 mb-0">{{ $message }}</p>
            <i class="fas fa-info-circle mr-2 fa-lg"></i>
        </div>
    </div>
@endif

{{-- @if ($errors->any())
    <div class="alert alert-danger alert-float" role="alert" x-data x-init="callAlert()">
        <div class="alert-float-container">
            <button type="button" class="close mt-1" data-dismiss="alert">×</button>
            <p class="mr-3 mb-0">Please check the form for errors</p>
            <i class="fas fa-exclamation-triangle mr-2 fa-lg"></i>
        </div>
    </div>
@endif --}}

<script>
    const callAlert = () => {
        $('.alert').hide().fadeIn('fast').delay(5000).fadeOut('slow', () => {
            $('.alert').remove();
        });
    }
</script>
