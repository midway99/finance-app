<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Model
{
    use HasApiTokens, HasFactory, Notifiable, HasFactory;

    const CREATED_AT = null;
    const UPDATED_AT = null;

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token'
    ];

    protected $casts = [
      'email_verified_at' => 'datetime',
    ];

    //TODO разобраться со связями модолей
    public function categories()
    {
        return $this->hasMany(Category::class, 'user_id', 'id');
    }

    public function info()
    {
        return $this->hasOne(Category::class, 'user_id', 'id');
    }

    public function record()
    {
        return $this->belongsTo(Category::class, 'user_id', 'id');
    }

}
