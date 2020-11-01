<?php

namespace App\Notifications;

use App\Models\Post;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PostCmNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * @var Post
     */
    public $post;

    /**
     * Create a new notification instance.
     *
     * @param Post $post
     */
    public function __construct(Post $post)
    {
        //
        $this->post = $post;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return !!$notifiable->email_on_reply ? ['mail','database'] : ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject("دیدگاه جدیدی برای پست {$this->post->title} ثبت شد")
            ->action('لینک پست', url("/post/{$this->post->slug}"));

    }

    /**
     * Get the array representation of the notification.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {

        return [
            'text' => "دیدگاه جدیدی برای پست {$this->post->title} ثبت شد",
            'link' => "/post/{$this->post->slug}",
        ];

    }
}
