<div>
    <h5>
    <b>.: Add Paper</b>
    </h5>
    <hr>
    @include('livewire.message.message')
    <div class="form-group">
        <label for="title">Title</label>
        <br>
        <textarea rows="2" wire:model = "title" class="form-control"></textarea>
        @error('title') <span class="text-danger">{{ $message }}</span>@enderror
    </div>
    <div class="form-group">
        <label for="abstract">Abstract</label>
        <br>
        <textarea rows="8" wire:model = "abstract" class="form-control"></textarea>
        @error('abstract') <span class="text-danger">{{ $message }}</span>@enderror
    </div>
    <div class="form-group">
        <label for="keyword">Keyword</label>
        <br>
        <input rows="1" wire:model = "Keyword" class="form-control">
        @error('keyword') <span class="text-danger">{{ $message }}</span>@enderror
    </div>
    <div class="form-group">
        <label for="abstract">Author</label>
        <br>
        <button class="btn btn-xs"> <i class="fas fa-plus-circle" style="color: green"></i>
            <u>Add me as the author</u>
        </button>
        or
        <button class="btn btn-xs"> <i class="fas fa-plus-circle" style="color: green"></i>
            <u>Add author</u>
        </button>

    </div>
    <div class="form-group">
      <label for="">Manuscript</label>
      <input type="file" wire:model="manuscriptFile" name="" id="" class="form-control" placeholder="Please upload file" aria-describedby="helpId">
      <small id="helpId" class="text-muted">Please upload PDF file type</small>
      <br>
      @error('manuscriptFile') <span class="text-danger">{{ $message }}</span>@enderror
    </div>

    <div class="form-group">
       
        <button wire:click="submitAbstract" class="btn btn-sm btn-success"> <i class="fas fa-save"></i>
            <u>Submit</u>
        </button>

    </div>
</div>
