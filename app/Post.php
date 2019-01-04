<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    public function tags()
    {
        return $this->belongsToMany('\App\Tag');
    }

    public function Media()
    {
        return $this->BelongsTo('\App\Media');
    }


    public function Author()
    {
        return $this->BelongsTo('\App\User');
    }

    public function Category()
    {
        return $this->BelongsTo('\App\Category');
    }
}
