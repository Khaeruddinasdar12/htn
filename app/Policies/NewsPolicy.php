<?php

namespace App\Policies;

use App\Models\News;
use App\Models\User;

class NewsPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, News $news): bool
    {
        return $user->isAdmin() || $news->user_id === $user->id;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, News $news): bool
    {
        return $user->isAdmin() || $news->user_id === $user->id;
    }

    public function delete(User $user, News $news): bool
    {
        return $user->isAdmin() || $news->user_id === $user->id;
    }

    public function deleteAny(User $user): bool
    {
        return true;
    }

    public function restore(User $user, News $news): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, News $news): bool
    {
        return $user->isAdmin();
    }
}
