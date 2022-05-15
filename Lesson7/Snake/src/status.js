/** Здесь будет храниться статус игры, например, играем мы, завершили или поставили на паузу */
class Status {
    constructor() {
        this.setPaused();
    }

    /** Это значит что мы играем */
    setPlaying() {
        this.condition = 'playing';
    }

    setPaused() {
        this.condition = 'paused';
    }

    /**
     * @returns {boolean} если мы сейчас играем, тогда true, иначе false
     */
    isPlaying() {
        return this.condition === 'playing';
    }

    /**
     * @returns {boolean} если сейчас игра на паузе, тогда true, иначе false
     */
    isPaused() {
        return this.condition === 'paused';
    }
}