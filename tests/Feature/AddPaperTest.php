<?php

namespace Tests\Feature;

use App\Models\Manuscript_Sympozia;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Livewire\Livewire;
use Tests\TestCase;

class AddPaperTest extends TestCase
{
    public function test_reset_manuscript_data()
    {
        Manuscript_Sympozia::query()->delete();

        $this->assertDeleted(Manuscript_Sympozia::query());
    }

    public function test_success_to_visit_author_dashboard()
    {
        $this->actingAs(Auth::loginUsingId(1))
            ->get('/author/submission')
            ->assertStatus(200);
    }

    public function test_failed_to_visit_author_dashboard_without_login()
    {
        $this->get('/author/submission')
            ->assertStatus(302);
    }

    public function test_check_livewire_component_present_in_author_dashboard()
    {
        $this->actingAs(Auth::loginUsingId(1))
            ->get('/author/submission')
            ->assertSeeLivewire('author.submission')
            ->assertSeeLivewire('author.paper');
    }

    public function test_success_to_visit_add_paper_by_button()
    {
        $this->actingAs(Auth::loginUsingId(1));

        Livewire::test('author.submission')
            ->set('action', 'show-add-paper')
            ->assertSeeLivewire('author.paper-add')
            ->assertSeeLivewire('author.author-detail');
    }

    public function test_success_to_visit_add_paper_by_link()
    {
        $this->actingAs(Auth::loginUsingId(1))
            ->get('/author/submission/add')
            ->assertSeeLivewire('author.paper-add')
            ->assertSeeLivewire('author.author-detail');
    }

    public function test_required_manual_submit_validation_field()
    {
        $this->actingAs(Auth::loginUsingId(1));

        Livewire::test('author.paper-add')
            ->set('title', null)
            ->set('abstract', null)
            ->set('keywords', null)
            ->set('authors', array())
            ->set('conferences_name', null)
            ->set('scope_selected', null)
            ->set('presenter', null)
            ->set('presenter_contact', null)
            ->set('manuscript_file', null)
            ->call('submitManuscript')
            ->assertHasErrors([
                'title' => 'required',
                'abstract' => 'required',
                'keywords' => 'required',
                'authors' => 'required',
                'conferences_name' => 'required',
                'scope_selected' => 'required',
                'presenter' => 'required',
                'presenter_contact' => 'required',
                'manuscript_file' => 'required',
            ]);
    }

    public function test_required_realtime_validation_field()
    {
        $this->actingAs(Auth::loginUsingId(1));

        Livewire::test('author.paper-add')
            ->set('title', 'test')
            ->assertHasNoErrors(['title' => 'required'])
            ->set('title', '')
            ->assertHasErrors(['title' => 'required'])
            ->set('abstract', 'test')
            ->assertHasNoErrors(['abstract' => 'required'])
            ->set('abstract', '')
            ->assertHasErrors(['abstract' => 'required'])
            ->set('keywords', ['test'])
            ->assertHasNoErrors(['keywords' => 'required'])
            ->set('keywords', [])
            ->assertHasErrors(['keywords' => 'required'])
            ->set('conferences_name', 'test')
            ->assertHasNoErrors(['conferences_name' => 'required'])
            ->set('conferences_name', '')
            ->assertHasErrors(['conferences_name' => 'required'])
            ->set('scope_selected', 'test')
            ->assertHasNoErrors(['scope_selected' => 'required'])
            ->set('scope_selected', '')
            ->assertHasErrors(['scope_selected' => 'required'])
            ->set('presenter', 'test')
            ->assertHasNoErrors(['presenter' => 'required'])
            ->set('presenter', '')
            ->assertHasErrors(['presenter' => 'required'])
            ->set('presenter_contact', 123)
            ->assertHasNoErrors(['presenter_contact' => 'required'])
            ->set('presenter_contact', 'test')
            ->assertHasErrors(['presenter_contact' => 'numeric'])
            ->set('presenter_contact', '')
            ->assertHasErrors(['presenter_contact' => 'required']);

        Livewire::test('author.author-detail')
            ->set('author_fn', 'test')
            ->assertHasNoErrors(['author_fn' => 'required'])
            ->set('author_fn', '')
            ->assertHasErrors(['author_fn' => 'required'])
            ->set('author_ln', 'test')
            ->assertHasNoErrors(['author_ln' => 'required'])
            ->set('author_ln', '')
            ->assertHasErrors(['author_ln' => 'required'])
            ->set('author_af', 'test')
            ->assertHasNoErrors(['author_af' => 'required'])
            ->set('author_af', '')
            ->assertHasErrors(['author_af' => 'required'])
            ->set('author_ml', 'test@mail.com')
            ->assertHasNoErrors(['author_ml' => 'required'])
            ->set('author_ml', '')
            ->assertHasErrors(['author_ml' => 'required'])
            ->set('author_ml', 'test')
            ->assertHasErrors(['author_ml' => 'email'])
            ->set('author_ct', 'test')
            ->assertHasNoErrors(['author_ct' => 'required'])
            ->set('author_ct', '')
            ->assertHasErrors(['author_ct' => 'required'])
            ->set('author_co', 'test')
            ->assertHasNoErrors(['author_co' => 'required'])
            ->set('author_co', '')
            ->assertHasErrors(['author_co' => 'required']);
    }

    public function test_success_add_paper_data()
    {
        $this->actingAs(Auth::loginUsingId(1));

        Livewire::test('author.paper-add')
            ->set('title', 'test')
            ->set('abstract', 'test')
            ->set('keywords', json_encode(['test']))
            ->set('authors', [[
                "author_fn" => "Gwendolyn",
                "author_ln" => "Conroy",
                "author_af" => "Hill-O'Hara",
                "author_ml" => "herzog.hillard@runolfsdottir.net",
                "author_ct" => "Monaco",
                "author_co" => "Yes"]])
            ->set('conferences_name', 'ISMEE2021')
            ->set('scope_selected', 'Power Energy and Industry application')
            ->set('presenter', 'test')
            ->set('presenter_contact', '+628523456789')
            ->set('manuscript_file', UploadedFile::fake()->create('test.pdf'))
            ->call('submitManuscript')
            ->assertSessionHas('success')
            ->assertRedirect('/author/submission');
    }

    public function test_duplicate_title_or_abstract()
    {
        $this->actingAs(Auth::loginUsingId(1));

        Livewire::test('author.paper-add')
            ->set('title', 'test')
            ->assertHasErrors(['title' => 'unique'])
            ->set('abstract', 'test')
            ->assertHasErrors(['abstract' => 'unique']);
    }

    public function test_error_file_upload()
    {
        $this->actingAs(Auth::loginUsingId(1));

        Livewire::test('author.paper-add')
            ->set('manuscript_file', UploadedFile::fake()->create('test.pdf', 3000))
            ->assertHasErrors(['manuscript_file' => 'max'])
            ->set('manuscript_file', UploadedFile::fake()->create('test.jpeg'))
            ->assertHasErrors(['manuscript_file' => 'mimes']);
    }

}