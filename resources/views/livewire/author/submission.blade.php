<div>
    <div wire:loading.block>
        <x-loading></x-loading>
    </div>
    @if ($action == null)
        <div class="row">
            <div class="col-sm-12 offset-sm-0">
                <button wire:click="action('show-add-paper')" class="btn btn-primary btn-sm mb-4 float-right"><i
                        class="fas fa-plus mr-2"></i>Add
                    Paper</button>
                @livewire('author.paper')
            </div>
        </div>
    @elseif ($action == 'show-add-paper')
        @livewire('author.paper-add')
    @endif
</div>
