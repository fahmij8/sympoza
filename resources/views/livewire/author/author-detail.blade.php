<div>
    <div class="rounded border mb-3">
        <div class="row p-3">
            <x-adminlte-input name="author_fn" error-key="author_fn" type="text" fgroup-class="col-md-6"
                class="{{ $errors->has('author_fn') ? 'is-invalid' : '' }}" label="First Name"
                placeholder="Author first name" wire:model="author_fn" autocomplete="off" />
            <x-adminlte-input name="author_ln" error-key="author_ln" type="text" fgroup-class="col-md-6"
                class="{{ $errors->has('author_ln') ? 'is-invalid' : '' }}" label="Last Name"
                placeholder="Author last name" wire:model="author_ln" autocomplete="off" />
            <x-adminlte-input name="author_af" error-key="author_af" type="text" fgroup-class="col-md-6"
                class="{{ $errors->has('author_af') ? 'is-invalid' : '' }}" label="Affiliation"
                placeholder="Author affiliation/organization" wire:model="author_af" autocomplete="off" />
            <x-adminlte-input name="author_ml" error-key="author_ml" type="email" fgroup-class="col-md-6"
                class="{{ $errors->has('author_ml') ? 'is-invalid' : '' }}" label="Email" placeholder="Author Email"
                wire:model="author_ml" autocomplete="off" />
            <div class="form-group col-md-6">
                <div class="form-group mb-0" wire:ignore>
                    <label for="author_ct" class="d-block">Country</label>
                    <input wire:model='author_ct' type="text" id="author_ct"
                        class="form-control {{ $errors->has('author_ct') ? 'is-invalid' : '' }}" autocomplete="off"
                        wire:focusout='$set("author_ct", $event.target.value)'>
                </div>
                <div class="form-group mb-0">
                    @error('author_ct') <div><small class="text-danger text-bold">{{ $message }}</small></div>
                    @enderror
                </div>
            </div>
            <x-adminlte-select name="author_co" label="Is co-author?" id='author_co' fgroup-class="col-md-6"
                class="{{ $errors->has('author_co') ? 'is-invalid' : '' }}" wire:model='author_co'>
                <x-adminlte-options :options="['No'=>'No', 'Yes'=>'Yes']" placeholder=" Select an option..." />
            </x-adminlte-select>
            <x-adminlte-button class="btn-sm bg-gradient-dark ml-2 mb-2 mt-n1" type="button" label="Add Author Data"
                icon="fas fa-user-plus mr-1" wire:click='addAuthor' />
            <x-adminlte-button class="btn-sm btn-outline-dark ml-2 mb-2 mt-n1" type="button" label="Use my data"
                icon="fas fa-user-tie mr-1" wire:click='prefillAuthor' />
        </div>
    </div>
</div>
