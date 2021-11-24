<div>
    @include('livewire.message.message')
    <div class="row bg-info">
        <div class="col-sm-12 offset-sm-0">
            <b>Name</b>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 offset-sm-1">
            <div class="row">
                <div class="col-sm-3 offset-sm-0 text-right">
                    <b>First name (please spell out, i.e., Jane instead of J.)</b>
                </div>
                <div class="col-sm-5 offset-sm-0 text-left">
                    <div class="form-group">
                        <input rows="2" wire:model="firstName" class="form-control"></textarea>
                        @error('firstName') <span class="text-danger">{{ $message }}</span>@enderror
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-3 offset-sm-0 text-right">
                    <b>*Last name (mixed case, i.e., Smith instead of SMITH)</b>
                </div>
                <div class="col-sm-6 offset-sm-0 text-left">
                    <div class="form-group">
                        <input rows="2" wire:model="lastName" class="form-control"></textarea>
                        @error('lastName') <span class="text-danger">{{ $message }}</span>@enderror
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-12 offset-sm-0">
            <button wire:click="createProfile" class="btn btn-success">Submit</button>
        </div>
    </div>


</div>
