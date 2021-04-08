<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RecordResource extends JsonResource
{
    /**
     * @param Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'category_id'=> $this->resource->category_id,
            'user_id'=> $this->resource->user_id,
            'amount'=> $this->resource->amount,
            'date'=> $this->resource->date,
            'description'=> $this->resource->description,
            'type'=> $this->resource->type,
            'created_at' => $this->resource->created_at,
            'updated_at' => $this->resource->updated_at,
            'deleted_at' => $this->resource->deleted_at,
        ];
    }
}
