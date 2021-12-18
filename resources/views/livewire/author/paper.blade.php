<div>
    <div wire:loading.block>
        <x-loading></x-loading>
    </div>
    @include('livewire.message.message')
    <h5 class="text-bold">.: Submission List</h5>
    <hr>
    @if (auth()->user()->manuscript->isEmpty())
        <div class="ilustration-no-data"></div>
        <h4 class="text-center mt-3 mb-0">Oh no!</h4>
        <p class="text-center mt-0">No paper data is submitted, lets add one.</p>
    @else
        @livewire('author.paper-delete')
        @livewire('author.submission-table')
    @endif
</div>