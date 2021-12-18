<div>
    @include('livewire.message.message')
    <div wire:loading.block wire:target='submitManuscript'>
        <x-loading></x-loading>
    </div>
    <div class="d-flex align-items-center">
        <button class="btn bg-gradient-gray-dark btn-sm mr-2 rounded-circle shadow-sm"
            wire:click='$emit("grabAction", null)'><i class="fas fa-chevron-circle-left"></i></button>
        <h5 class="text-bold mb-0">.: Add Paper</h5>
    </div>
    <hr>
    <div class="bs-stepper" wire:ignore.self>
        <div class="bs-stepper-header" role="tablist" wire:ignore>
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
        <div class="bs-stepper-content" wire:ignore.self>
            <div id="submission-info" class="content" role="tabpanel" aria-labelledby="submission-info-trigger"
                wire:ignore.self>
                <x-adminlte-input name="title" error-key="title" type="text"
                    class="{{ $errors->has('title') ? 'is-invalid' : '' }}" label="Title"
                    placeholder="Your paper title" wire:model="title" autocomplete="off" />

                <x-adminlte-textarea name="abstract" error-key="abstract" placeholder="Your paper abstract" rows='8'
                    class="{{ $errors->has('abstract') ? 'is-invalid' : '' }}" label="Abstract"
                    wire:model="abstract" />

                <div class="form-group">
                    <div class="form-group" wire:ignore>
                        <label for="keywords">Keywords</label>
                        <input type="text" id="keywords" wire:change="$set('keywords', $event.target.value)"
                            autocomplete="off"></input>
                        <small class="text-muted">Type your keywords, separate by pressing enter "↵" or comma ",".
                            Maximum 4 keywords.</small>
                    </div>
                    <div class="form-group mb-0">
                        @error('keywords') <div class="mt-n3"><small
                                class="text-danger text-bold">{{ $message }}</small></div>@enderror
                    </div>
                </div>
                <x-adminlte-button label='Next' theme="primary" icon="fas fa-chevron-circle-right mr-1"
                    class="stepper-next btn-sm" />
            </div>
            <div id="submission-author" class="content" role="tabpanel"
                aria-labelledby="submission-author-trigger" wire:ignore.self>
                <div class="form-group">
                    <label for='authors-add-group' class="d-block">Authorship Details</label>
                    <div class="mb-3">
                        @livewire('author.author-detail')
                    </div>
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                            <thead class="bg-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>Affiliation</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>Co-author</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (count($authors) > 0)
                                    @foreach ($authors as $author)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            <td>{{ $author['author_ln'] }}, {{ $author['author_fn'] }}</td>
                                            <td>{{ $author['author_af'] }}</td>
                                            <td>{{ $author['author_ml'] }}</td>
                                            <td>{{ $author['author_ct'] }}</td>
                                            <td>
                                                <div class="form-check text-center"><input class="form-check-input"
                                                        type="checkbox" disabled
                                                        {{ $author['author_co'] == 'Yes' ? 'checked' : '' }}></div>
                                            </td>
                                            <td>
                                                <button wire:click="removeAuthor({{ $loop->iteration - 1 }})"
                                                    class="btn btn-sm btn-danger">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr>
                                        <td colspan="7" class="text-center">No authors added yet.</td>
                                    </tr>
                                @endif
                            </tbody>
                        </table>
                    </div>
                    @error('authors') <div><small class="text-danger text-bold">{{ $message }}</small></div>
                    @enderror
                </div>
                <x-adminlte-button label='Previous' theme="primary" icon="fas fa-chevron-circle-left mr-1"
                    class="stepper-prev btn-sm" />
                <x-adminlte-button label='Next' theme="primary" icon="fas fa-chevron-circle-right mr-1"
                    class="stepper-next btn-sm" />
            </div>
            <div id="submission-file" class="content" role="tabpanel" aria-labelledby="submission-file-trigger"
                wire:ignore.self>
                <x-adminlte-select name="conferences_name" label="Conferences" id='conferences_name'
                    class="{{ $errors->has('conferences_name') ? 'is-invalid' : '' }}" wire:model='conferences_name'>
                    <option hidden>--- Select the conferences ---</option>
                    @foreach ($conferences as $conference)
                        <option value="{{ $conference->short_name }}">{{ $conference->name }}</option>
                    @endforeach
                </x-adminlte-select>

                <x-adminlte-select name="scope_selected" label="Scope" id='scope_selected'
                    class="{{ $errors->has('scope_selected') ? 'is-invalid' : '' }}" wire:model='scope_selected'>
                    <option hidden>--- Select the topic scope ---</option>
                    @foreach ($scopes as $scope)
                        <option value="{{ $scope }}">{{ $scope }}</option>
                    @endforeach
                </x-adminlte-select>

                <x-adminlte-input name="presenter" error-key="presenter" type="text"
                    class="{{ $errors->has('presenter') ? 'is-invalid' : '' }}" label="Presenter"
                    placeholder="Presenter Name" wire:model="presenter" autocomplete="off" />

                <x-adminlte-input name="presenter_contact" error-key="presenter_contact" type="tel"
                    class="{{ $errors->has('presenter_contact') ? 'is-invalid' : '' }}" label="Presenter Contact"
                    placeholder="Presenter Phone Number" wire:model="presenter_contact" autocomplete="off" />

                <x-filepond wire:model="manuscript_file" key='manuscript_file' title='Manuscript File' />

                <x-adminlte-button label='Previous' theme="primary" icon="fas fa-chevron-circle-left mr-1"
                    class="stepper-prev btn-sm" />
                <button wire:click="submitManuscript" class="btn btn-success btn-sm float-right"> <i
                        class="fas fa-save"></i>
                    Add Paper Submission
                </button>

            </div>
        </div>
    </div>
</div>