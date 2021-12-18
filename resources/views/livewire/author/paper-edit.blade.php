<div>
    @include('livewire.message.message')
    <div wire:loading.block wire:target='submitEditManuscript'>
        <x-loading></x-loading>
    </div>
    <div class="d-flex align-items-center">
        <button class="btn bg-gradient-gray-dark btn-sm mr-2 rounded-circle shadow-sm"
            wire:click='$emit("grabAction", null)'><i class="fas fa-chevron-circle-left"></i></button>
        <h5 class="mb-0 text-bold">.: Edit Paper</h5>
    </div>
    <hr class="mb-3">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
            <div class="card ">
                <div class="card-header">
                    <h6 class="mb-0 text-bold"><i class="fas fa-file-alt mr-1"></i> Paper Submission Details</h6>
                </div>
                <div class="card-body">
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
                                autocomplete="off" x-data x-init="
                                $('#keywords').val({{ $selectedPaper->keywords }})
                                "></input>
                            <small class="text-muted">Type your keywords, separate by pressing enter "↵" or comma
                                ",".
                                Maximum 4 keywords.</small>
                        </div>
                        <div class="form-group mb-0">
                            @error('keywords') <div class="mt-n3"><small
                                    class="text-danger text-bold">{{ $message }}</small></div>@enderror
                        </div>
                    </div>
                    <x-filepond wire:model="manuscript_file" key='manuscript_file' title="Manuscript File" />
                    @if ($selectedPaper->file->where('file_type', 1)->count() > 0)
                        @foreach ($selectedPaper->file->where('file_type', 1) as $file)
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1">
                                    <a href="{{ Storage::disk('local')->url($file->name) }}" target="_blank"><i
                                            class="fas fa-file-pdf mr-1"></i>{{ array_values(array_slice(explode('/', $file->name), -1))[0] }}</a>
                                    <small class="mx-1 my-0 p-0">(Uploaded on
                                        {{ $file->updated_at->isoFormat('LLLL') }})
                                    </small>
                                </div>
                            </div>
                        @endforeach
                    @endif
                </div>
            </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
            <div class="card ">
                <div class="card-header">
                    <h6 class="mb-0 text-bold">
                        <i class="fas fa-video mr-1"></i>
                        Conference Details
                    </h6>
                </div>
                <div class="card-body">
                    <x-adminlte-select name="conferences_name" label="Conferences" id='conferences_name'
                        class="{{ $errors->has('conferences_name') ? 'is-invalid' : '' }}"
                        wire:model='conferences_name'>
                        <option hidden>--- Select the conferences ---</option>
                        @foreach ($conferences as $conference)
                            <option value="{{ $conference->short_name }}">
                                {{ $conference->name }}</option>
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
                </div>
            </div>
        </div>

        <div class="col-12 mb-4">
            <div class="card ">
                <div class="card-header">
                    <h6 class="mb-0 text-bold"><i class="fas fa-users fa-sm mr-1"></i> Authorship</h6>
                </div>
                <div class="card-body">
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
                                    @foreach ($authors as $index => $author)
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
                                                <button wire:click="removeAuthor({{ $index }})"
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
            </div>
        </div>

        @if ($selectedPaper->milestone->description == 'Accepted')
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                <div class="card ">
                    <div class="card-header">
                        <h6 class="mb-0 text-bold"><i class="fas fa-copyright fa-sm mr-1"></i> Upload Copyright File
                        </h6>
                    </div>
                    <div class="card-body">
                        <x-filepond wire:model="copyright_file" key='copyright_file' title="Copyright File" />
                        @if ($selectedPaper->file->where('file_type', 3)->count() > 0)
                            @foreach ($selectedPaper->file->where('file_type', 3) as $file)
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <a href="{{ Storage::disk('local')->url($file->name) }}" target="_blank"><i
                                                class="fas fa-file-pdf mr-1"></i>{{ array_values(array_slice(explode('/', $file->name), -1))[0] }}</a>
                                        <small class="mx-1 my-0 p-0">(Uploaded on
                                            {{ $file->updated_at->isoFormat('LLLL') }})
                                        </small>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                <div class="card ">
                    <div class="card-header">
                        <h6 class="mb-0 text-bold"><i class="fas fa-file-signature fa-sm mr-1"></i> Upload Final Paper
                            File
                        </h6>
                    </div>
                    <div class="card-body">
                        <x-filepond wire:model="final_paper_file" key='final_paper_file' title="Final Paper File" />
                        @if ($selectedPaper->file->where('file_type', 2)->count() > 0)
                            @foreach ($selectedPaper->file->where('file_type', 2) as $file)
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <a href="{{ Storage::disk('local')->url($file->name) }}" target="_blank"><i
                                                class="fas fa-file-pdf mr-1"></i>{{ array_values(array_slice(explode('/', $file->name), -1))[0] }}</a>
                                        <small class="mx-1 my-0 p-0">(Uploaded on
                                            {{ $file->updated_at->isoFormat('LLLL') }})
                                        </small>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                    </div>
                </div>
            </div>
        @endif
    </div>
    <button wire:click="saveManuscript" class="btn btn-success btn-sm float-right"> <i class="fas fa-save"></i>
        Save Changes
    </button>
</div>