<?php

namespace App\Mail;

use App\Models\TravelUser;
use Faker\Provider\ar_EG\Address;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;


class BookingConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    //se paan los datos al constructor, para que estén disponibles para la vista
    public function __construct(protected TravelUser $order)
    {
        
    }

    //Configuración del remitente, y asunto del email
    public function envelope()
    {
        return new Envelope(

            subject: 'Confirmación de Reserva',
            
        );
    }

    //definición de la plantilla que se va a usar con el contenido del correo, generado con plantilla blade y HTML
    public function content()
    {
        return new Content(
            view: 'emailbook', 
            with: [
                'orderTimeStamp' => $this->order->created_at,
                'UserName' => $this->order->user->name,
                'Identifier' => $this->order->id,
                'orderNumber' => $this->order->user->travel_id,
                'orderDate' => $this->order->user->created_at,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
