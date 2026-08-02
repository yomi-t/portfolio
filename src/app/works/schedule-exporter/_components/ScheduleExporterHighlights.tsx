export function ScheduleExporterHighlights() {
    return (
        <div>
            <h2 className="font-mochiy text-xl leading-snug sm:text-2xl">
                日程調整をもっと楽に！
            </h2>
            <p className="mt-4 text-sm leading-relaxed opacity-70 sm:text-base">
                友達との遊びも、就活の面接も、同僚との面談も、これを使えばすぐに候補日時を出すことができます。
            </p>

            <div className="mt-8 flex flex-col gap-8">
                <div>
                    <h3 className="font-mochiy text-base opacity-100 sm:text-lg">
                        ◯ カレンダーを確認する時間を0に
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-70 sm:text-base">
                        予定を立てる時に、いつなら空いているかを瞬時に出力。
                        Appleのカレンダーと連携してるから、自分でカレンダーを確認する必要なし。
                        出力されたテキストはそのままあらゆる場所にコピペ可能。
                    </p>
                </div>

                <div>
                    <h3 className="font-mochiy text-base opacity-100 sm:text-lg">
                        ◯ 柔軟性抜群！
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-70 sm:text-base">
                        曜日や時間帯を制限して、余分な出力をなくせる。
                        すでに入っている予定とこれから入れる予定をどれだけ離したいかを設定可能。
                        またグラフを手動操作することで、柔軟に時間設定ができる。
                    </p>
                </div>
            </div>
        </div>
    );
}
