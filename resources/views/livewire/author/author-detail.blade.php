<div>
    <div class="container rounded border">
        <div class="row p-3">
            <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label for="author_fn">First Name</label>
                    <input id='author_fn' type="text" class="form-control" placeholder="First Name" autocomplete="off"
                        required></input>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label for="author_ln">Last Name</label>
                    <input id='author_ln' type="text" class="form-control" placeholder="Last Name" autocomplete="off"
                        required></input>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label for="author_af">Affiliation/Organization</label>
                    <input id='author_af' type="text" class="form-control" placeholder="Affiliation/Organization Name"
                        autocomplete="off" required></input>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label for="author_ml">Email</label>
                    <input id='author_ml' type="email" class="form-control" placeholder="john.doe@domain.com"
                        autocomplete="off" required></input>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label for="author_ct" class="d-block">Country</label>
                    <input type="text" id="author_ct" class="form-control" autocomplete="off" required>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label for="author_co">Is co-author?</label>
                    <select id='author_co' class="form-control">
                        <option hidden>--- Select co-author status ---</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
            </div>
            <button class="btn btn-primary" wire:click='dd("here")'>Check Function</button>
        </div>
    </div>
</div>
