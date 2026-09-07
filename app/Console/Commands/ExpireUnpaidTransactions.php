<?php

namespace App\Console\Commands;

use App\Models\Transaction;
use Illuminate\Console\Command;

class ExpireUnpaidTransactions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'transactions:expire-unpaid';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatically update status of UNPAID transactions older than 24 hours to EXPIRED';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $count = Transaction::expireOldUnpaidTransactions();
        $this->info("Successfully expired {$count} unpaid transactions older than 24 hours.");

        return Command::SUCCESS;
    }
}
