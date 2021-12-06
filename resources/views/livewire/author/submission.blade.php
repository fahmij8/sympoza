<div>
    <div wire:loading.block>
        <x-loading></x-loading>
    </div>
    @include('livewire.message.message')
    @if (!auth()->user()->manuscript->isEmpty())
        @if ($action == null)
            <div class="row">
                <div class="col-sm-12 offset-sm-0">
                    <button wire:click="action('show-add-paper')" class="btn btn-primary btn-sm mb-4"><i
                            class="fas fa-plus mr-2"></i>Add
                        Paper</button>
                    @livewire('author.paper')
                </div>
            </div>
        @elseif ($action == 'show-add-paper')
            @livewire('author.paper-add')
        @endif
    @else
        @if ($action == null)
            <div class="ilustration-no-data"></div>
            <h4 class="text-center mt-3 mb-0">Oh no!</h4>
            <p class="text-center mt-0">No paper data is submitted, lets add one.</p>
            <button wire:click="action('show-add-paper')" class="btn btn-primary btn-sm d-block mx-auto mt-2"><i
                    class="fas fa-plus mr-2"></i>Add Paper</button>
        @elseif ($action == 'show-add-paper')
            @livewire('author.paper-add')
        @endif
    @endif
</div>
