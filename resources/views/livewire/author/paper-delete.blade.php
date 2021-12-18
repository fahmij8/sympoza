<div>
    <x-adminlte-modal id="deleteSubmission" title="Are you sure?" theme="danger" icon="fas fa-exclamation-triangle"
        size='lg' v-centered static-backdrop wire:ignore.self>
        @if ($selectedPaper != null)
            Are you sure you want to delete <strong>{{ $selectedPaper->title }}</strong> submission?
            <x-slot name="footerSlot">
                <x-adminlte-button theme="danger" label="Dismiss" data-dismiss="modal" />
                <x-adminlte-button theme="success" label="Accept" data-dismiss="modal"
                    wire:click='confirmDeletePaper({{ $selectedPaper }})' />
            </x-slot>
        @else
            Please wait...
        @endif
    </x-adminlte-modal>
</div>