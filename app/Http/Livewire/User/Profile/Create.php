<?php

namespace App\Http\Livewire\User\Profile;

use App\Models\Profile_Sympozia;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Create extends Component
{
    public $firstName;
    public $lastName;
    public function render()
    {
        return view('livewire.user.profile.create');
    }

    public function createProfile()
    {
        $this->validate([
            'firstName' => 'required',
            'lastName' => 'required',
        ]);

        $profile = Profile_Sympozia::where('user_id', Auth::user()->id)->first();
        if ($profile) {
            Profile_Sympozia::where('user_id', Auth::user()->id)->update([
                'first_name' => $this->firstName,
                'last_name' => $this->lastName,
                'email' => Auth::user()->email,
            ]);
            session()->flash('success', 'Profile has been updated');
        } else {
            Profile_Sympozia::create([
                'first_name' => $this->firstName,
                'last_name' => $this->lastName,
                'user_id' => Auth::user()->id,
                'email' => Auth::user()->email,
            ]);
            session()->flash('success', 'Profile has been created');
        }

    }
}