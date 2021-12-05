<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class AddPaperTest extends TestCase
{
    public function test_user_can_login()
    {
        $response = $this->withCredentials(Auth::loginUsingId(1))
            ->get('/author');

        $response->assertStatus(200);
    }

    public function test_visit_add_paper()
    {
        $response = $this->withCredentials(Auth::loginUsingId(1))
            ->get('/author/submission');

        $response->assertStatus(200);
    }
}