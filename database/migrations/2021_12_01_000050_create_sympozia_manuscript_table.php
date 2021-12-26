<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSympoziaManuscriptTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sympozia_manuscript', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('conferences_id');
            $table->foreign('conferences_id')->references('id')->on('sympozia_conferences');
            $table->string('title')->unique();
            $table->text('abstract');
            $table->text('keywords');
            $table->unsignedBigInteger('milestone_id');
            $table->foreign('milestone_id')->references('id')->on('sympozia_manuscript_milestone')->onDelete('cascade');
            $table->unsignedBigInteger('status_id');
            $table->foreign('status_id')->references('id')->on('sympozia_manuscript_status')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sympozia_manuscript');
    }
}