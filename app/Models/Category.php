<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    const CREATED_AT = null;
    const UPDATED_AT = null;


    protected $guarded = array('id', 'user_id','category_id');

    protected $fillable = [
       'user_id',
        'category_limit',
        'name'
    ];

    //TODO разобраться со связями модолей
    public function user()
    {
        return $this->hasMany(Category::class, 'user_id', 'id');
    }
}
