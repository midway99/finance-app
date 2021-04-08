<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    use HasFactory;
    const CREATED_AT = null;
    const UPDATED_AT = null;
    protected $table = 'records';

    protected $fillable = [
       'user_id','category_id', 'amount', 'date', 'description','type'
    ];

    protected $guarded = array('id', 'user_id','category_id');



}
