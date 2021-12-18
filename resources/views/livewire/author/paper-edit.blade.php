<div>
    <x-adminlte-modal id="editSubmission" title="Edit Submission" theme="info" icon="far fa-edit" size='xl' v-centered
        static-backdrop scrollable wire:ignore.self>
        @if ($selectedPaper != null)
            <div class="accordion" id="editSubmissionAccordion">
                <div class="card">
                    <div class="card-header" id="conferenceHeading">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                data-target="#conferenceCollapse" aria-expanded="true"
                                aria-controls="conferenceCollapse">
                                Edit Conference Details
                            </button>
                        </h2>
                    </div>
                    <div id="conferenceCollapse" class="collapse show" aria-labelledby="conferenceHeading"
                        data-parent="#editSubmissionAccordion">
                        <div class="card-body">
                            {{ $selectedPaper->conferences_id }}
                            {{ $selectedPaper->authors->scope }}
                            {{ $selectedPaper->authors->presenter }}
                            {{ $selectedPaper->authors->contact }}
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="PaperHeading">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button"
                                data-toggle="collapse" data-target="#paperCollapse" aria-expanded="false"
                                aria-controls="paperCollapse">
                                Edit Paper Details
                            </button>
                        </h2>
                    </div>
                    <div id="paperCollapse" class="collapse" aria-labelledby="PaperHeading"
                        data-parent="#editSubmissionAccordion">
                        <div class="card-body">
                            {{ $selectedPaper->title }}
                            {{ $selectedPaper->abstract }}
                            {{ $selectedPaper->keywords }}
                            {{ $selectedPaper->file }}
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="AuthorHeading">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button"
                                data-toggle="collapse" data-target="#authorCollapse" aria-expanded="false"
                                aria-controls="authorCollapse">
                                Edit Authorship
                            </button>
                        </h2>
                    </div>
                    <div id="authorCollapse" class="collapse" aria-labelledby="AuthorHeading"
                        data-parent="#editSubmissionAccordion">
                        <div class="card-body">
                            {{ $selectedPaper->authors->author_list }}
                        </div>
                    </div>
                </div>
                @if ($selectedPaper->milestone->description == 'Accepted')
                    <div class="card">
                        <div class="card-header" id="copyrightHeading">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#copyrightCollapse" aria-expanded="false"
                                    aria-controls="copyrightCollapse">
                                    Upload Copyright
                                </button>
                            </h2>
                        </div>
                        <div id="copyrightCollapse" class="collapse" aria-labelledby="copyrightHeading"
                            data-parent="#editSubmissionAccordion">
                            <div class="card-body">
                                And lastly, the placeholder content for the third and final accordion panel. This panel
                                is
                                hidden by default.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id=finalHeading">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#finalCollapse" aria-expanded="false"
                                    aria-controls="finalCollapse">
                                    Upload Final Paper
                                </button>
                            </h2>
                        </div>
                        <div id="finalCollapse" class="collapse" aria-labelledby="finalHeading"
                            data-parent="#editSubmissionAccordion">
                            <div class="card-body">
                                And lastly, the placeholder content for the third and final accordion panel. This panel
                                is
                                hidden by default.
                            </div>
                        </div>
                    </div>
                @endif
            </div>
            <x-slot name="footerSlot">
                <x-adminlte-button theme="danger" label="Dismiss" data-dismiss="modal" />
                <x-adminlte-button theme="success" label="Accept" data-dismiss="modal" />
            </x-slot>
        @else
            Please wait ...
        @endif
    </x-adminlte-modal>
    <script>
        $('#editSubmission').on('hidden.bs.modal', function(event) {
            Livewire.emit('editPaper', null);
        })
    </script>

</div>
