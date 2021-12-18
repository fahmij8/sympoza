<div class="form-group" x-data x-init="() => {
        FilePond.registerPlugin(FilePondPluginFileValidateType, FilePondPluginPdfPreview);
        const post = FilePond.create($refs.input, {
            acceptedFileTypes: ['application/pdf'],
            allowPdfPreview: true,
            pdfPreviewHeight: 320,
            pdfComponentExtraParams: 'toolbar=0&view=fit&page=1'
         });
        post.setOptions({
            server: {
                process:(fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                    @this.upload('{{ $attributes->whereStartsWith('wire:model')->first() }}', file, load, error, progress)
                },
                revert: (filename, load) => {
                    @this.removeUpload('{{ $attributes->whereStartsWith('wire:model')->first() }}', filename, load)
                },
            }
        });
        $('.filepond--credits').remove();
        $('.filepond--root').addClass('mb-1');
    }">
    <div class="form-group mb-0" wire:ignore>
        <label for="{{ $attributes->whereStartsWith('title')->first() }}">
            {{ ucwords($attributes->whereStartsWith('title')->first()) }}
        </label>
        <input type="file" x-ref="input" />
    </div>
    <div class="form-group mb-0">
        @error($attributes->whereStartsWith('key')->first()) <div><small
                    class="text-danger text-bold">{{ $message }}</small></div>
        @enderror
    </div>

</div>