<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    use HasFactory;

    protected $guarded = array('id', 'user_id');

    protected $fillable = [
        'bill',
        'locale',
        'user_name'
    ];
    //TODO разобраться со связями модолей
    public function user()
    {
        return $this->hasMany(Info::class, 'user_id', 'id');
    }
}
