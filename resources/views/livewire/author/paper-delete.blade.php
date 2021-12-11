<div>
    <x-adminlte-modal id="deleteSubmission" title="Are you sure?" theme="danger" icon="fas fa-exclamation-triangle"
        size='lg' v-centered static-backdrop wire:ignore.self>
        Are you sure you want to delete this submission?
        <x-slot name="footerSlot">
            <x-adminlte-button theme="danger" label="Dismiss" data-dismiss="modal" />
            <x-adminlte-button theme="success" label="Accept" data-dismiss="modal"
                wire:click='deleteSubmission({{ $id_toDelete }})' />
        </x-slot>
    </x-adminlte-modal>
</div>
