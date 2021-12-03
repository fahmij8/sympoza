<div>
    @section('plugins.Select2', true)
    <div wire:loading.block wire:target='submitManuscript'>
        <x-loading></x-loading>
    </div>
    <h5>
        <b>.: Add Paper</b>
    </h5>
    <hr>
    @include('livewire.message.message')
    <div class="bs-stepper" wire:ignore>
        <div class="bs-stepper-header" role="tablist">
            <div class="step" data-target="#submission-info">
                <button type="button" class="step-trigger" role="tab" aria-controls="submission-info"
                    id="submission-info-trigger">
                    <span class="bs-stepper-circle">1</span>
                    <span class="bs-stepper-label">Submission
                        Information</span>
                </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#submission-author">
                <button type="button" class="step-trigger" role="tab" aria-controls="submission-author"
                    id="submission-author-trigger">
                    <span class="bs-stepper-circle">2</span>
                    <span class="bs-stepper-label">Authorship
                        Information</span>
                </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#submission-file">
                <button type="button" class="step-trigger" role="tab" aria-controls="submission-file"
                    id="submission-file-trigger">
                    <span class="bs-stepper-circle">3</span>
                    <span class="bs-stepper-label">Upload
                        Manuscript</span>
                </button>
            </div>
        </div>
        <div class="bs-stepper-content">
            <div id="submission-info" class="content" role="tabpanel" aria-labelledby="submission-info-trigger"
                wire:ignore>
                <div class="form-group" wire:ignore>
                    <label for="conferences_name">Conferences</label>
                    <select wire:model='conferences_name' class="custom-select">
                        <option hidden>--- Select the conferences ---</option>
                        @foreach ($conferences as $conference)
                            <option value="{{ $conference->short_name }}">{{ $conference->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input wire:model="title" type="text"
                        class="form-control {{ $errors->has('title') ? 'is-invalid' : '' }}"
                        placeholder="Your paper title" autocomplete="off"></input>
                    @error('title') <span class="text-danger">{{ $message }}</span>@enderror
                </div>
                <div class="form-group">
                    <label for="abstract">Abstract</label>
                    <textarea wire:model="abstract"
                        class="form-control {{ $errors->has('abstract') ? 'is-invalid' : '' }}"
                        placeholder="Your paper abstract" rows="8"></textarea>
                    @error('abstract') <span class="text-danger">{{ $message }}</span>@enderror
                </div>
                <div class="form-group" wire:ignore>
                    <label for="keywords">Keywords</label>
                    <input type="text" id="keywords" wire:change="$set('keywords', $event.target.value)"
                        autocomplete="off"></input>
                    <small class="text-muted">Type your keywords, separate with enter. Maximum 4 keywords.</small>
                    @error('keywords') <span class="text-danger">{{ $message }}</span>@enderror
                </div>
                <button class="btn btn-primary stepper-next">Next</button>
            </div>
            <div id="submission-author" class="content" role="tabpanel"
                aria-labelledby="submission-author-trigger">
                <div class="form-group">
                    <label for="presenter">Presenter</label>
                    <input wire:model="presenter" type="text"
                        class="form-control {{ $errors->has('presenter') ? 'is-invalid' : '' }}"
                        placeholder="Presenter Name" autocomplete="off"></input>
                    @error('title') <span class="text-danger">{{ $message }}</span>@enderror
                </div>
                <div class="form-group" wire:ignore.self>
                    <label for='authors-add-group' class="d-block">Authorship Details</label>
                    <div>
                        <livewire:author.author-detail :key="$authors" />
                    </div>
                </div>
                <button class="btn btn-primary stepper-prev">Previous</button>
                <button class="btn btn-primary stepper-next">Next</button>
            </div>
            <div id="submission-file" class="content" role="tabpanel" aria-labelledby="submission-file-trigger">
                <div class="form-group">
                    <label for="manuscript_file">Draft paper (full)</label>
                    <div class="custom-file">
                        <input wire:model="manuscript_file" type="file" class="custom-file-input" id="manuscript_file"
                            name="upload" accept="application/pdf">
                        <label class="custom-file-label" for=manuscript_file">Choose file</label>
                        @error('manuscript_file') <span class="text-danger">{{ $message }}</span>@enderror
                    </div>
                </div>
                <button class="btn btn-primary stepper-prev">Previous</button>
                <div class="form-group">
                    <button wire:click="submitManuscript" class="btn btn-success d-block ml-auto"> <i
                            class="fas fa-save"></i>
                        Add Paper Submission
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
