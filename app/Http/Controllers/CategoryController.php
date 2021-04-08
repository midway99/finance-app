<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Validator;
use Symfony\Component\Console\Input\Input;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return CategoryResource
     */
    public function index()
    {
        //Category::all();
        return CategoryResource::collection(Category::all());
        //return CategoryResource::make(Category::all()->first());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function store(Request $request)
    {

        $request->validate([
            'category_limit'=> 'required|max:255',
            'name'=> 'required|max:255',
        ]);

        Category::create([
            'user_id'=>2,
            'category_limit' => request('category_limit'),
            'name' => request('name'),
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $request->validate([
           'category_limit'=> 'required|max:255',
           'name'=> 'required|max:255',
        ]);

            // store
            $category = Category::find($id);
            $category->name  = $request->input('name');
            $category->category_limit = $request->input('category_limit');
            $category->save();

        }
        //$category->save();

        //return redirect('/posts')->with('success', 'Пост успешно отредактирован!');
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
