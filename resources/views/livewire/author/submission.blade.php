<div>
    <div wire:loading.block>
        <x-loading></x-loading>
    </div>
    @if ($action == 'show-edit-paper')
        @livewire('author.paper-edit', ['SelectedId' => $SelectedId])
    @elseif ($action == 'show-add-paper')
        @livewire('author.paper-add')
    @elseif ($action == null)
        @if (!auth()->user()->manuscript->isEmpty())
            <button wire:click="action('show-add-paper')" class="btn btn-primary btn-sm mb-4 float-right"><i
                    class="fas fa-plus mr-2"></i>Add
                Paper</button>
        @endif
        @livewire('author.paper')
        @if (auth()->user()->manuscript->isEmpty())
            <button wire:click="action('show-add-paper')" class="btn btn-primary btn-sm mb-4 d-block mx-auto"><i
                    class="fas fa-plus mr-2"></i>Add
                Paper</button>
        @endif
    @endif
</div>